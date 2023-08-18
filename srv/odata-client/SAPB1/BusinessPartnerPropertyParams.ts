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
 * BusinessPartnerPropertyParams
 */
export interface BusinessPartnerPropertyParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Property Code.
   * @nullable
   */
  propertyCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BusinessPartnerPropertyParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerPropertyParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BusinessPartnerPropertyParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BusinessPartnerPropertyParams.propertyCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PropertyCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link BusinessPartnerPropertyParams.propertyName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PropertyName', 'Edm.String', true);

  /**
   * Creates an instance of BusinessPartnerPropertyParamsField.
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
      BusinessPartnerPropertyParams,
      fieldOptions
    );
  }
}

export namespace BusinessPartnerPropertyParams {
  /**
   * Metadata information on all properties of the `BusinessPartnerPropertyParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPartnerPropertyParams>[] =
    [
      {
        originalName: 'PropertyCode',
        name: 'propertyCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PropertyName',
        name: 'propertyName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
