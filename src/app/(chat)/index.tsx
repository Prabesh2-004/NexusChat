import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ChatPage() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>

        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat accusantium debitis delectus doloremque, enim eveniet harum, quas quia expedita repellendus molestias sunt modi autem. Voluptatibus inventore eveniet molestias ab.
          Corporis ipsa sint necessitatibus deleniti quod nihil quae soluta tempora sed molestias perspiciatis consequatur molestiae, magni quidem unde laudantium sapiente ratione, a quos aspernatur eos reiciendis consequuntur! Possimus, accusantium ipsam.
          Autem delectus aperiam nostrum veritatis! Quae molestias cupiditate rerum excepturi. Doloremque maxime rerum voluptates excepturi, dicta perspiciatis. Explicabo commodi blanditiis nulla asperiores? Voluptatem reiciendis ipsa a asperiores nemo dicta error!
          Deleniti, officiis iusto. Quibusdam est quis ea recusandae vel alias corrupti animi voluptatibus cumque nesciunt beatae laborum nobis ipsa, facere fugiat, iusto placeat libero quia sequi. Deserunt iusto temporibus neque?
          Voluptate adipisci veniam ab, nesciunt odit quis omnis aspernatur! Sint sapiente veniam harum modi maxime minima nobis doloremque cum quibusdam aperiam aliquam, iste quos nisi expedita saepe fugiat consequatur eos!
          Aspernatur unde quis at exercitationem, asperiores rerum sapiente a itaque repudiandae accusamus molestiae. Harum, neque, voluptatem amet animi odit voluptatum sint dicta, consectetur in odio sequi itaque totam ea fuga.
          Repellat officia exercitationem minima illo neque laborum error dolor ex ratione necessitatibus assumenda, aliquam vel enim, deserunt magnam facilis possimus amet. Molestias fugiat nemo architecto qui eaque amet reiciendis aliquam.
          Ipsa porro provident veritatis dignissimos. Nisi repellendus ipsum eaque, adipisci eum accusantium sunt alias est, optio quos vitae quisquam libero praesentium laudantium, ad delectus reprehenderit odio. Optio magni asperiores quos?
          Facere quis qui, ipsam natus in repudiandae quisquam vero sed pariatur voluptatem exercitationem doloremque accusantium ad labore eius debitis? Excepturi unde pariatur, autem temporibus vel nam asperiores dolorum. Expedita, architecto!
          Vitae velit aperiam, fugit ducimus voluptatum eum neque ex aspernatur sit fugiat corrupti nam sunt. Cumque, fugit, consequatur recusandae, non iste sunt odio labore provident deserunt assumenda aliquid veniam? Commodi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  content: {
    padding: 24,
  },

  main: {
    width: "100%",
    maxWidth: 960,
    alignSelf: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#38434D",
  },
});