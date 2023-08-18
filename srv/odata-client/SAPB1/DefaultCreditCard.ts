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
 * DefaultCreditCard
 */
export interface DefaultCreditCard<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Account Code.
   * @nullable
   */
  creditAccountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DefaultCreditCardField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultCreditCardField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DefaultCreditCard,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DefaultCreditCard.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link DefaultCreditCard.creditAccountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAccountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditAccountCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DefaultCreditCard.creditCardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditCardCode', 'Edm.Int32', true);

  /**
   * Creates an instance of DefaultCreditCardField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DefaultCreditCard, fieldOptions);
  }
}

export namespace DefaultCreditCard {
  /**
   * Metadata information on all properties of the `DefaultCreditCard` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DefaultCreditCard>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditAccountCode',
      name: 'creditAccountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditCardCode',
      name: 'creditCardCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
