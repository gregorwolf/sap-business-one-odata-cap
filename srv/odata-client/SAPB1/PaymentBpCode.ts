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
 * PaymentBpCode
 */
export interface PaymentBpCode<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * PaymentBpCodeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentBpCodeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentBpCode,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentBpCode.bpCode} property for query construction.
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
   * Representation of the {@link PaymentBpCode.date} property for query construction.
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
   * Creates an instance of PaymentBpCodeField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentBpCode, fieldOptions);
  }
}

export namespace PaymentBpCode {
  /**
   * Metadata information on all properties of the `PaymentBpCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentBpCode>[] = [
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
