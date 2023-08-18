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
 * SalesTaxCodesLine
 */
export interface SalesTaxCodesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sta Tax On Tax Type.
   * @nullable
   */
  staTaxOnTaxType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sta Taxon Tax Code.
   * @nullable
   */
  staTaxonTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stc Code.
   * @nullable
   */
  stcCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sta Type.
   * @nullable
   */
  staType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sta Code.
   * @nullable
   */
  staCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Effective Rate.
   * @nullable
   */
  effectiveRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * SalesTaxCodesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxCodesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesTaxCodesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesTaxCodesLine.staTaxOnTaxType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staTaxOnTaxType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'STATaxOnTaxType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link SalesTaxCodesLine.staTaxonTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staTaxonTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'STATaxonTaxCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link SalesTaxCodesLine.stcCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stcCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('STCCode', 'Edm.String', true);
  /**
   * Representation of the {@link SalesTaxCodesLine.staType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('STAType', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxCodesLine.staCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('STACode', 'Edm.String', true);
  /**
   * Representation of the {@link SalesTaxCodesLine.rowNumber} property for query construction.
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
   * Representation of the {@link SalesTaxCodesLine.effectiveRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EffectiveRate', 'Edm.Double', true);

  /**
   * Creates an instance of SalesTaxCodesLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SalesTaxCodesLine, fieldOptions);
  }
}

export namespace SalesTaxCodesLine {
  /**
   * Metadata information on all properties of the `SalesTaxCodesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxCodesLine>[] = [
    {
      originalName: 'STATaxOnTaxType',
      name: 'staTaxOnTaxType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'STATaxonTaxCode',
      name: 'staTaxonTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'STCCode',
      name: 'stcCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'STAType',
      name: 'staType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'STACode',
      name: 'staCode',
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
      originalName: 'EffectiveRate',
      name: 'effectiveRate',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
