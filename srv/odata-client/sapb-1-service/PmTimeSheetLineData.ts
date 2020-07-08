/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmTimeSheetLineData
 */
export interface PmTimeSheetLineData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: number;
  /**
   * Labor Item.
   * @nullable
   */
  laborItem?: string;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * Workorder.
   * @nullable
   */
  workorder?: number;
  /**
   * Service Call.
   * @nullable
   */
  serviceCall?: number;
  /**
   * Cost Center.
   * @nullable
   */
  costCenter?: string;
  /**
   * Financial Project.
   * @nullable
   */
  financialProject?: string;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Gps Data.
   * @nullable
   */
  gpsData?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: number;
  /**
   * Break.
   * @nullable
   */
  break?: Time;
  /**
   * Non Billable Time.
   * @nullable
   */
  nonBillableTime?: Time;
  /**
   * Effective Time.
   * @nullable
   */
  effectiveTime?: Time;
  /**
   * Billable Time.
   * @nullable
   */
  billableTime?: Time;
}

/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetLineData.build]] instead.
 */
export function createPmTimeSheetLineData(json: any): PmTimeSheetLineData {
  return PmTimeSheetLineData.build(json);
}

/**
 * PmTimeSheetLineDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmTimeSheetLineDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmTimeSheetLineData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmTimeSheetLineData.activityType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityType', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.laborItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  laborItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LaborItem', this, 'Edm.String');
  /**
   * Representation of the [[PmTimeSheetLineData.startTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('StartTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[PmTimeSheetLineData.endTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('EndTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[PmTimeSheetLineData.workorder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workorder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Workorder', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.serviceCall]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCall: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceCall', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCenter: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostCenter', this, 'Edm.String');
  /**
   * Representation of the [[PmTimeSheetLineData.financialProject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  financialProject: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FinancialProject', this, 'Edm.String');
  /**
   * Representation of the [[PmTimeSheetLineData.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Location', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.gpsData]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gpsData: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GPSData', this, 'Edm.String');
  /**
   * Representation of the [[PmTimeSheetLineData.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Branch', this, 'Edm.Int32');
  /**
   * Representation of the [[PmTimeSheetLineData.break]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  break: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('Break', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[PmTimeSheetLineData.nonBillableTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nonBillableTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('NonBillableTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[PmTimeSheetLineData.effectiveTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('EffectiveTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[PmTimeSheetLineData.billableTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billableTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('BillableTime', this, 'Edm.TimeOfDay');
}

export namespace PmTimeSheetLineData {
  export function build(json: { [keys: string]: FieldType }): PmTimeSheetLineData {
    return createComplexType(json, {
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      ActivityType: (activityType: number) => ({ activityType: edmToTs(activityType, 'Edm.Int32') }),
      LaborItem: (laborItem: string) => ({ laborItem: edmToTs(laborItem, 'Edm.String') }),
      StartTime: (startTime: Time) => ({ startTime: edmToTs(startTime, 'Edm.TimeOfDay') }),
      EndTime: (endTime: Time) => ({ endTime: edmToTs(endTime, 'Edm.TimeOfDay') }),
      Workorder: (workorder: number) => ({ workorder: edmToTs(workorder, 'Edm.Int32') }),
      ServiceCall: (serviceCall: number) => ({ serviceCall: edmToTs(serviceCall, 'Edm.Int32') }),
      CostCenter: (costCenter: string) => ({ costCenter: edmToTs(costCenter, 'Edm.String') }),
      FinancialProject: (financialProject: string) => ({ financialProject: edmToTs(financialProject, 'Edm.String') }),
      Location: (location: number) => ({ location: edmToTs(location, 'Edm.Int32') }),
      GPSData: (gpsData: string) => ({ gpsData: edmToTs(gpsData, 'Edm.String') }),
      Branch: (branch: number) => ({ branch: edmToTs(branch, 'Edm.Int32') }),
      Break: (break: Time) => ({ break: edmToTs(break, 'Edm.TimeOfDay') }),
        NonBillableTime: (nonBillableTime: Time) => ({ nonBillableTime: edmToTs(nonBillableTime, 'Edm.TimeOfDay') }),
          EffectiveTime: (effectiveTime: Time) => ({ effectiveTime: edmToTs(effectiveTime, 'Edm.TimeOfDay') }),
            BillableTime: (billableTime: Time) => ({ billableTime: edmToTs(billableTime, 'Edm.TimeOfDay') })
  });
}
}
