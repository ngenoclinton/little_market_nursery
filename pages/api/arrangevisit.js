import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject:data.name,
            text:"There is a new message",
            html:"<h1>Test Title</h1> <p>Here is the Body Text</p>"
        }); 

      console.log(req.body);
      res.status(200).json({success: true});    
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad Request" });
    }
  }
};

export default handler;
