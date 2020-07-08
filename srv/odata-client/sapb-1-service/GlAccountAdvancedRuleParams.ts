/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class GlAccountAdvancedRuleParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace GlAccountAdvancedRuleParams {
  export function build(json: { [keys: string]: FieldType }): GlAccountAdvancedRuleParams {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      Period: (period: string) => ({ period: edmToTs(period, 'Edm.String') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemGroup: (itemGroup: number) => ({ itemGroup: edmToTs(itemGroup, 'Edm.Int32') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      BPGroup: (bpGroup: number) => ({ bpGroup: edmToTs(bpGroup, 'Edm.Int32') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      ShipToCountry: (shipToCountry: string) => ({ shipToCountry: edmToTs(shipToCountry, 'Edm.String') }),
      ShipToState: (shipToState: string) => ({ shipToState: edmToTs(shipToState, 'Edm.String') })
    });
  }
}
