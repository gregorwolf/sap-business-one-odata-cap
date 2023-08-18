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
 * BpWithholdingTax
 */
export interface BpWithholdingTax<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BpWithholdingTaxField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpWithholdingTaxField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpWithholdingTax,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpWithholdingTax.wtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpWithholdingTax.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);

  /**
   * Creates an instance of BpWithholdingTaxField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpWithholdingTax, fieldOptions);
  }
}

export namespace BpWithholdingTax {
  /**
   * Metadata information on all properties of the `BpWithholdingTax` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpWithholdingTax>[] = [
    {
      originalName: 'WTCode',
      name: 'wtCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
