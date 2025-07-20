import boto3

client = boto3.client('comprehend')
text = "This product is amazing!"

response = client.detect_sentiment(
    Text=text,
    LanguageCode='en'
)

print(response['Sentiment'])
    