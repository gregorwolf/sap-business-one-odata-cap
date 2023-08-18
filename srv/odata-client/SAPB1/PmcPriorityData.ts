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
 * PmcPriorityData
 */
export interface PmcPriorityData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Priority Id.
   * @nullable
   */
  priorityId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Priority Name.
   * @nullable
   */
  priorityName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PmcPriorityDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcPriorityDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmcPriorityData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmcPriorityData.priorityId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriorityID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmcPriorityData.priorityName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriorityName', 'Edm.String', true);

  /**
   * Creates an instance of PmcPriorityDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmcPriorityData, fieldOptions);
  }
}

export namespace PmcPriorityData {
  /**
   * Metadata information on all properties of the `PmcPriorityData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcPriorityData>[] = [
    {
      originalName: 'PriorityID',
      name: 'priorityId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PriorityName',
      name: 'priorityName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
