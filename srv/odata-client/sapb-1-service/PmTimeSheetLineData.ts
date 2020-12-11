/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Full Day.
   * @nullable
   */
  fullDay?: BoYesNoEnum;
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
export class PmTimeSheetLineDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmTimeSheetLineData> {
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
  /**
   * Representation of the [[PmTimeSheetLineData.fullDay]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fullDay: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('FullDay', this);

  /**
   * Creates an instance of PmTimeSheetLineDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmTimeSheetLineData);
  }
}

export namespace PmTimeSheetLineData {
  /**
   * Metadata information on all properties of the `PmTimeSheetLineData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmTimeSheetLineData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActivityType',
    name: 'activityType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LaborItem',
    name: 'laborItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StartTime',
    name: 'startTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'EndTime',
    name: 'endTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'Workorder',
    name: 'workorder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ServiceCall',
    name: 'serviceCall',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CostCenter',
    name: 'costCenter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FinancialProject',
    name: 'financialProject',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Location',
    name: 'location',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GPSData',
    name: 'gpsData',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Branch',
    name: 'branch',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Break',
    name: 'break',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'NonBillableTime',
    name: 'nonBillableTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'EffectiveTime',
    name: 'effectiveTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'BillableTime',
    name: 'billableTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'FullDay',
    name: 'fullDay',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmTimeSheetLineData {
    return deserializeComplexTypeV4(json, PmTimeSheetLineData);
  }
}
