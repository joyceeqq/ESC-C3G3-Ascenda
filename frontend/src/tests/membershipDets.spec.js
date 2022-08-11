
import React from 'react';
import { shallow } from 'enzyme';
import ProgramModalContent from "./../components/Modals/membershipDets";

const event = {
    preventDefault: () => {}
};

const mockClose = jest.fn();
const defaultProps = {
    close:mockClose,
    show: true,
    userName: "Jessica Jones",
    chosenCompany: "Barclays",
    numberPoints: 500,
    memberFormat: "1234abc",
    minExAmount: 300,
  };

it('should validate entered data and submit', () => {
    const wrapper = shallow(<ProgramModalContent props={defaultProps}/>);
    const instance = wrapper.instance(); //if this is causing some issue just change programModalCOntent to any
    instance.setState({membershipID: '1234abc' });//You need to set this test value, I'm not sure what is correct and incorrect
    instance.setState({confirmID: '1234abc' });//same for this

    closeSpy = jest.spyOn(props, 'close');
    //Lets assume that the membershipID format is correct and everything passes
    instance.handleSubmit(event);
    expect(wrapper.state("pointsShow")).toEqual(true);
    expect(closeSpy).toHaveBeenCalled();
})

it('should validate entered data and not submit because of wrong format', () => {
    const wrapper = shallow(<ProgramModalContent props={mock} />);
    const instance = wrapper.instance(); //if this is causing some issue just change programModalCOntent to any
    instance.setState({membershipID: 'test value' });
    instance.setState({confirmID: 'test value' });

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    //Lets assume that the membershipID format is wrong, formatValid will be set to false
    instance.handleSubmit(event);
    expect(instance.state("pointsShow")).toEqual(false);
    expect(alertSpy).toHaveBeenCalledWith("Invalid member format, please check you are entering the correct membership ID, wrong order");

})

it('should validate entered data and not submit because of wrong length', () => {
    const wrapper = shallow(<ProgramModalContent props={mock} />);
    const instance = wrapper.instance(); //if this is causing some issue just change programModalCOntent to any
    instance.setState({membershipID: 'test value' });
    instance.setState({confirmID: 'test value' });

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    //Lets assume that the membershipID length is wrong
    instance.handleSubmit(event);
    expect(instance.state("pointsShow")).toEqual(false);
    expect(alertSpy).toHaveBeenCalledWith("Invalid member format, please check you are entering the correct membership ID, wrong length");

})

it('should validate entered data and not submit because of wrong length', () => {
    const wrapper = shallow(<ProgramModalContent props={mock} />);
    const instance = wrapper.instance(); //if this is causing some issue just change programModalCOntent to any
    instance.setState({membershipID: 'test value' });
    instance.setState({confirmID: 'test value' });

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    //Lets assume that the membershipID is not the same confirmID
    instance.handleSubmit(event);
    expect(instance.state("pointsShow")).toEqual(false);
    expect(alertSpy).toHaveBeenCalledWith("Please check that both IDs are the same.");

})
