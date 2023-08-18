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
 * WtdFreight
 */
export interface WtdFreight<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Freight Code.
   * @nullable
   */
  freightCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * WtdFreightField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdFreightField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WtdFreight,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WtdFreight.freightCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freightCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreightCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link WtdFreight.wTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link WtdFreight.effectiveDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link WtdFreight.effectiveDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveDateTo',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of WtdFreightField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WtdFreight, fieldOptions);
  }
}

export namespace WtdFreight {
  /**
   * Metadata information on all properties of the `WtdFreight` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdFreight>[] = [
    {
      originalName: 'FreightCode',
      name: 'freightCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WTaxCode',
      name: 'wTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EffectiveDateFrom',
      name: 'effectiveDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EffectiveDateTo',
      name: 'effectiveDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
