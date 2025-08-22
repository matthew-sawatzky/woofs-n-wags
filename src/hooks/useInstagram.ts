import { useState, useEffect } from "react";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
}

interface UseInstagramReturn {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
}

export const useInstagram = (accessToken?: string): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use provided token or environment variable
  const token = accessToken || import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      setLoading(true);
      setError(null);

      if (!token) {
        console.log("No Instagram access token found - using mock data");
        // Mock data for development/demo purposes
        const mockPosts: InstagramPost[] = [
          {
            id: "1",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Happy dogs playing at daycare! 🐕 Our furry friends love their playtime together. #WoofsNWags #DogDaycare #PlayTime",
            timestamp: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: "2",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Grooming day! ✨ Professional care for every pup. Look at this beautiful transformation! #DogGrooming #PamperedPups #WoofsNWags",
            timestamp: new Date(Date.now() - 172800000).toISOString(),
          },
          {
            id: "3",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Training session in progress! 🎾 Teaching good manners and fun tricks. Education is key to a happy dog! #K9Education #DogTraining #GoodDog",
            timestamp: new Date(Date.now() - 259200000).toISOString(),
          },
          {
            id: "4",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Sleepover buddies! 🌙 Safe and cozy overnight care when you're away. Sweet dreams, furry friends! #SleepoverService #DogBoarding #SafeSpace",
            timestamp: new Date(Date.now() - 345600000).toISOString(),
          },
          {
            id: "5",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Socializing is so important! 🐾 New friendships being made every day at Woofs N Wags. #Socialization #NewFriends #DogCommunity",
            timestamp: new Date(Date.now() - 432000000).toISOString(),
          },
          {
            id: "6",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Treat time! 🦴 Healthy, delicious snacks for our good boys and girls. Nutrition matters! #HealthyTreats #DogNutrition #RewardTime",
            timestamp: new Date(Date.now() - 518400000).toISOString(),
          },
          {
            id: "7",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Exercise time! 🏃‍♂️ Keeping our pups healthy and active with plenty of outdoor activities. #Exercise #HealthyDogs #OutdoorFun",
            timestamp: new Date(Date.now() - 604800000).toISOString(),
          },
          {
            id: "8",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Meet and Greet session! 👋 Getting to know each new family member. Every dog is special to us! #MeetAndGreet #NewMember #WelcomeHome",
            timestamp: new Date(Date.now() - 691200000).toISOString(),
          },
        ];

        setPosts(mockPosts);
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching real Instagram posts...");
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp,thumbnail_url&access_token=${token}&limit=8`
        );

        if (!response.ok) {
          throw new Error(
            `Instagram API Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(`Instagram API Error: ${data.error.message}`);
        }

        console.log(
          "Successfully fetched Instagram posts:",
          data.data?.length || 0,
          "posts"
        );
        setPosts(data.data || []);
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError("Unable to load Instagram posts - showing sample content");

        // Fallback to mock data on error
        const mockPosts: InstagramPost[] = [
          {
            id: "1",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Happy dogs playing at daycare! 🐕 Our furry friends love their playtime together. #WoofsNWags #DogDaycare #PlayTime",
            timestamp: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: "2",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Grooming day! ✨ Professional care for every pup. Look at this beautiful transformation! #DogGrooming #PamperedPups #WoofsNWags",
            timestamp: new Date(Date.now() - 172800000).toISOString(),
          },
          {
            id: "3",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Training session in progress! 🎾 Teaching good manners and fun tricks. Education is key to a happy dog! #K9Education #DogTraining #GoodDog",
            timestamp: new Date(Date.now() - 259200000).toISOString(),
          },
          {
            id: "4",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Sleepover buddies! 🌙 Safe and cozy overnight care when you're away. Sweet dreams, furry friends! #SleepoverService #DogBoarding #SafeSpace",
            timestamp: new Date(Date.now() - 345600000).toISOString(),
          },
          {
            id: "5",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Socializing is so important! 🐾 New friendships being made every day at Woofs N Wags. #Socialization #NewFriends #DogCommunity",
            timestamp: new Date(Date.now() - 432000000).toISOString(),
          },
          {
            id: "6",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Treat time! 🦴 Healthy, delicious snacks for our good boys and girls. Nutrition matters! #HealthyTreats #DogNutrition #RewardTime",
            timestamp: new Date(Date.now() - 518400000).toISOString(),
          },
          {
            id: "7",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Exercise time! 🏃‍♂️ Keeping our pups healthy and active with plenty of outdoor activities. #Exercise #HealthyDogs #OutdoorFun",
            timestamp: new Date(Date.now() - 604800000).toISOString(),
          },
          {
            id: "8",
            media_type: "IMAGE",
            media_url:
              "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop&crop=center",
            permalink: "https://www.instagram.com/woofsnwags/?hl=en",
            caption:
              "Meet and Greet session! 👋 Getting to know each new family member. Every dog is special to us! #MeetAndGreet #NewMember #WelcomeHome",
            timestamp: new Date(Date.now() - 691200000).toISOString(),
          },
        ];

        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [token]);
  return { posts, loading, error };
};
