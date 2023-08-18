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
 * MultiplePayment
 */
export interface MultiplePayment<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bank Statment Line Id.
   * @nullable
   */
  bankStatmentLineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * List Line Id.
   * @nullable
   */
  listLineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Identifier.
   * @nullable
   */
  documentIdentifier?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount Lc.
   * @nullable
   */
  amountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount Fc.
   * @nullable
   */
  amountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Is Debit.
   * @nullable
   */
  isDebit?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * MultiplePaymentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MultiplePaymentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MultiplePayment,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MultiplePayment.bankStatmentLineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatmentLineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BankStatmentLineID',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link MultiplePayment.listLineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  listLineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ListLineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link MultiplePayment.documentIdentifier} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentIdentifier: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentIdentifier',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MultiplePayment.amountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountLC', 'Edm.Double', true);
  /**
   * Representation of the {@link MultiplePayment.amountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link MultiplePayment.isDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isDebit: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsDebit', BoYesNoEnum, true);

  /**
   * Creates an instance of MultiplePaymentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, MultiplePayment, fieldOptions);
  }
}

export namespace MultiplePayment {
  /**
   * Metadata information on all properties of the `MultiplePayment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MultiplePayment>[] = [
    {
      originalName: 'BankStatmentLineID',
      name: 'bankStatmentLineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ListLineID',
      name: 'listLineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentIdentifier',
      name: 'documentIdentifier',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AmountLC',
      name: 'amountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AmountFC',
      name: 'amountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'IsDebit',
      name: 'isDebit',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
