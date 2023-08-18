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
 * ProgressiveTaxLine
 */
export interface ProgressiveTaxLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Min Amount.
   * @nullable
   */
  minAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Max Amount.
   * @nullable
   */
  maxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ProgressiveTaxLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProgressiveTaxLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProgressiveTaxLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProgressiveTaxLine.taxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxRate', 'Edm.Double', true);
  /**
   * Representation of the {@link ProgressiveTaxLine.minAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MinAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link ProgressiveTaxLine.maxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaxAmount', 'Edm.Double', true);

  /**
   * Creates an instance of ProgressiveTaxLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ProgressiveTaxLine, fieldOptions);
  }
}

export namespace ProgressiveTaxLine {
  /**
   * Metadata information on all properties of the `ProgressiveTaxLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProgressiveTaxLine>[] = [
    {
      originalName: 'TaxRate',
      name: 'taxRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MinAmount',
      name: 'minAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MaxAmount',
      name: 'maxAmount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
