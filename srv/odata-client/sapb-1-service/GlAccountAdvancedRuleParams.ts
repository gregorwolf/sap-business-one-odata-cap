/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GlAccountAdvancedRuleParams
 */
export interface GlAccountAdvancedRuleParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Period.
   * @nullable
   */
  period?: string;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: number;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Bp Group.
   * @nullable
   */
  bpGroup?: number;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: string;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[GlAccountAdvancedRuleParams.build]] instead.
 */
export function createGlAccountAdvancedRuleParams(json: any): GlAccountAdvancedRuleParams {
  return GlAccountAdvancedRuleParams.build(json);
}

/**
 * GlAccountAdvancedRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GlAccountAdvancedRuleParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GlAccountAdvancedRuleParams> {
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.period]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  period: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Period', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemGroup', this, 'Edm.Int32');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.bpGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpGroup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPGroup', this, 'Edm.Int32');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.shipToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCountry', this, 'Edm.String');
  /**
   * Representation of the [[GlAccountAdvancedRuleParams.shipToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToState', this, 'Edm.String');

  /**
   * Creates an instance of GlAccountAdvancedRuleParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GlAccountAdvancedRuleParams);
  }
}

export namespace GlAccountAdvancedRuleParams {
  /**
   * Metadata information on all properties of the `GlAccountAdvancedRuleParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GlAccountAdvancedRuleParams>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Period',
    name: 'period',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemGroup',
    name: 'itemGroup',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPGroup',
    name: 'bpGroup',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToCountry',
    name: 'shipToCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToState',
    name: 'shipToState',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GlAccountAdvancedRuleParams {
    return deserializeComplexTypeV4(json, GlAccountAdvancedRuleParams);
  }
}
