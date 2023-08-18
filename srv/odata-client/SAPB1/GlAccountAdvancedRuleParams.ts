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
 * GlAccountAdvancedRuleParams
 */
export interface GlAccountAdvancedRuleParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period.
   * @nullable
   */
  period?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Group.
   * @nullable
   */
  bpGroup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
}

/**
 * GlAccountAdvancedRuleParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class GlAccountAdvancedRuleParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  GlAccountAdvancedRuleParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link GlAccountAdvancedRuleParams.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link GlAccountAdvancedRuleParams.period} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  period: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Period', 'Edm.String', true);
  /**
   * Representation of the {@link GlAccountAdvancedRuleParams.code} property for query construction.
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
   * Representation of the {@link GlAccountAdvancedRuleParams.itemCode} property for query construction.
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
   * Representation of the {@link GlAccountAdvancedRuleParams.itemGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemGroup', 'Edm.Int32', true);
  /**
   * Representation of the {@link GlAccountAdvancedRuleParams.warehouse} property for query construction.
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
   * Representation of the {@link GlAccountAdvancedRuleParams.bpGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPGroup', 'Edm.Int32', true);
  /**
   * Representation of the {@link GlAccountAdvancedRuleParams.federalTaxId} property for query construction.
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
   * Representation of the {@link GlAccountAdvancedRuleParams.shipToCountry} property for query construction.
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
   * Representation of the {@link GlAccountAdvancedRuleParams.shipToState} property for query construction.
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
   * Creates an instance of GlAccountAdvancedRuleParamsField.
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
      GlAccountAdvancedRuleParams,
      fieldOptions
    );
  }
}

export namespace GlAccountAdvancedRuleParams {
  /**
   * Metadata information on all properties of the `GlAccountAdvancedRuleParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GlAccountAdvancedRuleParams>[] =
    [
      {
        originalName: 'AbsoluteEntry',
        name: 'absoluteEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Period',
        name: 'period',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemGroup',
        name: 'itemGroup',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Warehouse',
        name: 'warehouse',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPGroup',
        name: 'bpGroup',
        type: 'Edm.Int32',
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
      }
    ];
}
