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
 * BpPaymentMethod
 */
export interface BpPaymentMethod<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BpPaymentMethodField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPaymentMethodField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpPaymentMethod,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpPaymentMethod.paymentMethodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentMethodCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpPaymentMethod.rowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpPaymentMethod.bpCode} property for query construction.
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
   * Creates an instance of BpPaymentMethodField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpPaymentMethod, fieldOptions);
  }
}

export namespace BpPaymentMethod {
  /**
   * Metadata information on all properties of the `BpPaymentMethod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpPaymentMethod>[] = [
    {
      originalName: 'PaymentMethodCode',
      name: 'paymentMethodCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RowNumber',
      name: 'rowNumber',
      type: 'Edm.Int32',
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
