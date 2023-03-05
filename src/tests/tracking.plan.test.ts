
import { assert } from 'chai';
import sinon from 'sinon';
import trackingPlanRepository from '../app/repository/tracking.plan.repository';
import  trackingPlanService  from "../app/service/tracking.plan.service";
import trackingPlanMock from "./mock/tracking.plan.mock";

describe('createTrackingPlan', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should create a new tracking plan and associated events in the database', async () => {
    const trackingPlanModel = trackingPlanMock.trackingPlanModel;
    const repositoryStub = sinon.stub(trackingPlanRepository, 'createTrackingPlan').resolves(trackingPlanMock.trackingPlanResult);
    const expected = trackingPlanMock.trackingPlanResult;
    const actual = await trackingPlanService.createTrackingPlan(trackingPlanModel);
    assert.equal(actual, expected);
  })
})

