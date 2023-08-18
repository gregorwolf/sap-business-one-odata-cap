/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoundingContextEnum } from './RoundingContextEnum';
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
 * DecimalData
 */
export interface DecimalData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Context.
   * @nullable
   */
  context?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DecimalDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DecimalDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DecimalData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DecimalData.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Value', 'Edm.Double', true);
  /**
   * Representation of the {@link DecimalData.context} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  context: EnumField<
    EntityT,
    DeSerializersT,
    RoundingContextEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Context', RoundingContextEnum, true);
  /**
   * Representation of the {@link DecimalData.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);

  /**
   * Creates an instance of DecimalDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DecimalData, fieldOptions);
  }
}

export namespace DecimalData {
  /**
   * Metadata information on all properties of the `DecimalData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DecimalData>[] = [
    {
      originalName: 'Value',
      name: 'value',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Context',
      name: 'context',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
