/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ProductionOrdersStage
 */
export interface ProductionOrdersStage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sequence Number.
   * @nullable
   */
  sequenceNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Entry.
   * @nullable
   */
  stageEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Required Days.
   * @nullable
   */
  requiredDays?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Waiting Days.
   * @nullable
   */
  waitingDays?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Calculation Proportion.
   * @nullable
   */
  calculationProportion?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ProductionOrdersStageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrdersStageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductionOrdersStage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductionOrdersStage.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersStage.stageId} property for query construction.
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
   * Representation of the {@link ProductionOrdersStage.sequenceNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersStage.stageEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersStage.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link ProductionOrdersStage.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ProductionOrdersStage.endDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ProductionOrdersStage.requiredDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RequiredDays', 'Edm.Double', true);
  /**
   * Representation of the {@link ProductionOrdersStage.waitingDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  waitingDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WaitingDays', 'Edm.Double', true);
  /**
   * Representation of the {@link ProductionOrdersStage.calculationProportion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculationProportion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CalculationProportion',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of ProductionOrdersStageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ProductionOrdersStage,
      fieldOptions
    );
  }
}

export namespace ProductionOrdersStage {
  /**
   * Metadata information on all properties of the `ProductionOrdersStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrdersStage>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
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
      originalName: 'SequenceNumber',
      name: 'sequenceNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageEntry',
      name: 'stageEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EndDate',
      name: 'endDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'RequiredDays',
      name: 'requiredDays',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WaitingDays',
      name: 'waitingDays',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CalculationProportion',
      name: 'calculationProportion',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
