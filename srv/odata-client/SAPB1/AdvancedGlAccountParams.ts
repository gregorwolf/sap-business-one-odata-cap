/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryAccountTypeEnum } from './InventoryAccountTypeEnum';
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
 * AdvancedGlAccountParams
 */
export interface AdvancedGlAccountParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Account Type.
   * @nullable
   */
  accountType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Usage.
   * @nullable
   */
  usage?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf 1.
   * @nullable
   */
  udf1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf 2.
   * @nullable
   */
  udf2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf 3.
   * @nullable
   */
  udf3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf 4.
   * @nullable
   */
  udf4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf 5.
   * @nullable
   */
  udf5?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AdvancedGlAccountParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdvancedGlAccountParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AdvancedGlAccountParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AdvancedGlAccountParams.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.bpCode} property for query construction.
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
   * Representation of the {@link AdvancedGlAccountParams.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.shipToCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCountry', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.shipToState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToState', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.vatGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroup', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.postingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link AdvancedGlAccountParams.accountType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountType: EnumField<
    EntityT,
    DeSerializersT,
    InventoryAccountTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AccountType',
    InventoryAccountTypeEnum,
    true
  );
  /**
   * Representation of the {@link AdvancedGlAccountParams.usage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Usage', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.udf1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDF1', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.udf2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDF2', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.udf3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDF3', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.udf4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDF4', 'Edm.String', true);
  /**
   * Representation of the {@link AdvancedGlAccountParams.udf5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDF5', 'Edm.String', true);

  /**
   * Creates an instance of AdvancedGlAccountParamsField.
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
      AdvancedGlAccountParams,
      fieldOptions
    );
  }
}

export namespace AdvancedGlAccountParams {
  /**
   * Metadata information on all properties of the `AdvancedGlAccountParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AdvancedGlAccountParams>[] =
    [
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Warehouse',
        name: 'warehouse',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPCode',
        name: 'bpCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'FederalTaxID',
        name: 'federalTaxId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToCountry',
        name: 'shipToCountry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToState',
        name: 'shipToState',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'VatGroup',
        name: 'vatGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PostingDate',
        name: 'postingDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'AccountType',
        name: 'accountType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Usage',
        name: 'usage',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDF1',
        name: 'udf1',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDF2',
        name: 'udf2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDF3',
        name: 'udf3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDF4',
        name: 'udf4',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDF5',
        name: 'udf5',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
