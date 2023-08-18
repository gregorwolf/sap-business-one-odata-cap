/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PmTimeSheetLineData
 */
export interface PmTimeSheetLineData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Labor Item.
   * @nullable
   */
  laborItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Workorder.
   * @nullable
   */
  workorder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Service Call.
   * @nullable
   */
  serviceCall?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cost Center.
   * @nullable
   */
  costCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Financial Project.
   * @nullable
   */
  financialProject?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gps Data.
   * @nullable
   */
  gpsData?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Break.
   * @nullable
   */
  break?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Non Billable Time.
   * @nullable
   */
  nonBillableTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Effective Time.
   * @nullable
   */
  effectiveTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Billable Time.
   * @nullable
   */
  billableTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Full Day.
   * @nullable
   */
  fullDay?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Project Id.
   * @nullable
   */
  projectId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Subproject Id.
   * @nullable
   */
  subprojectId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * PmTimeSheetLineDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmTimeSheetLineDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmTimeSheetLineData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmTimeSheetLineData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.activityType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActivityType', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.laborItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  laborItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LaborItem', 'Edm.String', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.startTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StartTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.endTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EndTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.workorder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workorder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Workorder', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.serviceCall} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCall: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ServiceCall', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.costCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCenter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.financialProject} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  financialProject: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FinancialProject',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PmTimeSheetLineData.location} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.gpsData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gpsData: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GPSData', 'Edm.String', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.branch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Branch', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.break} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  break: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Break', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.nonBillableTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nonBillableTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NonBillableTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link PmTimeSheetLineData.effectiveTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link PmTimeSheetLineData.billableTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billableTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillableTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link PmTimeSheetLineData.fullDay} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fullDay: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('FullDay', BoYesNoEnum, true);
  /**
   * Representation of the {@link PmTimeSheetLineData.projectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.subprojectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubprojectID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmTimeSheetLineData.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);

  /**
   * Creates an instance of PmTimeSheetLineDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmTimeSheetLineData, fieldOptions);
  }
}

export namespace PmTimeSheetLineData {
  /**
   * Metadata information on all properties of the `PmTimeSheetLineData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmTimeSheetLineData>[] = [
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ActivityType',
      name: 'activityType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LaborItem',
      name: 'laborItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StartTime',
      name: 'startTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'EndTime',
      name: 'endTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'Workorder',
      name: 'workorder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ServiceCall',
      name: 'serviceCall',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CostCenter',
      name: 'costCenter',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FinancialProject',
      name: 'financialProject',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Location',
      name: 'location',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GPSData',
      name: 'gpsData',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Branch',
      name: 'branch',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Break',
      name: 'break',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'NonBillableTime',
      name: 'nonBillableTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'EffectiveTime',
      name: 'effectiveTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'BillableTime',
      name: 'billableTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'FullDay',
      name: 'fullDay',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ProjectID',
      name: 'projectId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SubprojectID',
      name: 'subprojectId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
