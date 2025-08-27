from dotenv import load_dotenv
import os
from omnidimension import Client

# Load API key from .env
load_dotenv()
api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("❌ API key not found! Make sure it's set in your .env file.")

# Initialize client
client = Client(api_key)

# Create an agent
response = client.agent.create(
    name="AgriSupport AI",
    welcome_message=(
        "Hi [farmer_name], this is [agent_name] from AgriSupport, "
        "calling to offer you personalized crop advice based on the latest soil and market data."
    ),
    context_breakdown=[
        {
            "title": "Agent Role & Context",
            "body": (
                "You are a representative of AgriSupport, calling farmers to provide personalized agricultural "
                "guidance based on real-time data."
            ),
            "is_enabled": True,
        },
        {
            "title": "Introduction",
            "body": (
                "Start with a friendly and professional introduction: "
                "'Hi [farmer_name], this is [agent_name] from AgriSupport.'"
            ),
            "is_enabled": True,
        },
    ],
    call_type="Outgoing",
    transcriber={  # ✅ fixed here
        "provider": "whisper",
        "silence_timeout_ms": 400,
    },
    model={  # ✅ optionally change model name if needed
        "model": "gpt-4o",
        "temperature": 0.7,
    },
    voice={
        "provider": "google",
        "voice_id": "en-in-Chirp3-HD-Despina",
    },
)

print("✅ Agent created successfully:")
print(response)
