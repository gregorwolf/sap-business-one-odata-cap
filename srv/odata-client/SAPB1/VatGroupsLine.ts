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
 * VatGroupsLine
 */
export interface VatGroupsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Effectivefrom.
   * @nullable
   */
  effectivefrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Equalization Tax.
   * @nullable
   */
  equalizationTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Datev Code.
   * @nullable
   */
  datevCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * VatGroupsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class VatGroupsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  VatGroupsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link VatGroupsLine.effectivefrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Effectivefrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link VatGroupsLine.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link VatGroupsLine.equalizationTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTax',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link VatGroupsLine.datevCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  datevCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DatevCode', 'Edm.Int32', true);

  /**
   * Creates an instance of VatGroupsLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, VatGroupsLine, fieldOptions);
  }
}

export namespace VatGroupsLine {
  /**
   * Metadata information on all properties of the `VatGroupsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<VatGroupsLine>[] = [
    {
      originalName: 'Effectivefrom',
      name: 'effectivefrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'EqualizationTax',
      name: 'equalizationTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DatevCode',
      name: 'datevCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
