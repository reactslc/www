import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: Styles.BG_COLOR_CONDUCT,
    color: Styles.FONT_COLOR_CONDUCT
  },
  a: {
    color: Styles.FONT_COLOR_CONDUCT
  }
});

export default class Conduct extends Component {
  render() {
    return (
      <section id="conduct" style={STYLES.section}>
        <h2>Code of Conduct</h2>
        <p>
          All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.
        </p>
        <p>
          <strong>tl;dr: Be excellent with each other</strong>
        </p>
        <h3>Need Help?</h3>
        <p>
          You have our contact details in the emails we've sent.
        </p>
        <h3>The Quick Version</h3>
        <p>
          Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.
        </p>
        <h3>The Less Quick Version</h3>
        <p>
          Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
        </p>
        <p>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>
        <p>
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.
        </p>
        <p>
          If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
        </p>
        <p>
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded t-shirts.
        </p>
        <p>
          Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
        </p>
        <p>
          We expect participants to follow these rules at conference and workshop venues and conference-related social events.
        </p>
        <p>
          This Code of Conduct is borrowed from <a href={Links.CODE_OF_CONDUCT} target="_blank" style={STYLES.a}>Conference Code of Conduct</a>.
        </p>
      </section>
    );
  }
}
