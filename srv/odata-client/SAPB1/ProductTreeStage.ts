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
 * ProductTreeStage
 */
export interface ProductTreeStage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Father.
   * @nullable
   */
  father?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Waiting Days.
   * @nullable
   */
  waitingDays?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ProductTreeStageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeStageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductTreeStage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductTreeStage.father} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  father: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Father', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeStage.stageId} property for query construction.
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
   * Representation of the {@link ProductTreeStage.sequenceNumber} property for query construction.
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
   * Representation of the {@link ProductTreeStage.stageEntry} property for query construction.
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
   * Representation of the {@link ProductTreeStage.name} property for query construction.
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
   * Representation of the {@link ProductTreeStage.waitingDays} property for query construction.
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
   * Creates an instance of ProductTreeStageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ProductTreeStage, fieldOptions);
  }
}

export namespace ProductTreeStage {
  /**
   * Metadata information on all properties of the `ProductTreeStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductTreeStage>[] = [
    {
      originalName: 'Father',
      name: 'father',
      type: 'Edm.String',
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
      originalName: 'WaitingDays',
      name: 'waitingDays',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
