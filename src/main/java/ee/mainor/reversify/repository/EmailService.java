package ee.mainor.reversify.repository;

import ee.mainor.reversify.dto.EmailDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailService {

    String sendSimpleMail(EmailDetails details);

    String sendMailWithAttachment(EmailDetails details);

}
