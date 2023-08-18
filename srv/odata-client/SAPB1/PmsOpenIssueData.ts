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
 * PmsOpenIssueData
 */
export interface PmsOpenIssueData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Area.
   * @nullable
   */
  area?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Closed.
   * @nullable
   */
  closed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Solution Id.
   * @nullable
   */
  solutionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Responsible.
   * @nullable
   */
  responsible?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Entered By.
   * @nullable
   */
  enteredBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Entered Date.
   * @nullable
   */
  enteredDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Effort.
   * @nullable
   */
  effort?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * PmsOpenIssueDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsOpenIssueDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmsOpenIssueData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmsOpenIssueData.lineId} property for query construction.
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
   * Representation of the {@link PmsOpenIssueData.stageId} property for query construction.
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
   * Representation of the {@link PmsOpenIssueData.area} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  area: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Area', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsOpenIssueData.priority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsOpenIssueData.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link PmsOpenIssueData.closed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Closed', BoYesNoEnum, true);
  /**
   * Representation of the {@link PmsOpenIssueData.solutionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SolutionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsOpenIssueData.responsible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responsible: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Responsible', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsOpenIssueData.enteredBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EnteredBy', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsOpenIssueData.enteredDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EnteredDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmsOpenIssueData.effort} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effort: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Effort', 'Edm.Double', true);

  /**
   * Creates an instance of PmsOpenIssueDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmsOpenIssueData, fieldOptions);
  }
}

export namespace PmsOpenIssueData {
  /**
   * Metadata information on all properties of the `PmsOpenIssueData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsOpenIssueData>[] = [
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Area',
      name: 'area',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Priority',
      name: 'priority',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Closed',
      name: 'closed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SolutionID',
      name: 'solutionId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Responsible',
      name: 'responsible',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EnteredBy',
      name: 'enteredBy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EnteredDate',
      name: 'enteredDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Effort',
      name: 'effort',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
