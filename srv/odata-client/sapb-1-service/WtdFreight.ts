/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtdFreight
 */
export interface WtdFreight {
  /**
   * Freight Code.
   * @nullable
   */
  freightCode?: number;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: Moment;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdFreight.build]] instead.
 */
export function createWtdFreight(json: any): WtdFreight {
  return WtdFreight.build(json);
}

/**
 * WtdFreightField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdFreightField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtdFreight.freightCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freightCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FreightCode', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdFreight.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdFreight.effectiveDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdFreight.effectiveDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateTo', this, 'Edm.DateTimeOffset');
}

export namespace WtdFreight {
  export function build(json: { [keys: string]: FieldType }): WtdFreight {
    return createComplexType(json, {
      FreightCode: (freightCode: number) => ({ freightCode: edmToTs(freightCode, 'Edm.Int32') }),
      WTaxCode: (wTaxCode: string) => ({ wTaxCode: edmToTs(wTaxCode, 'Edm.String') }),
      EffectiveDateFrom: (effectiveDateFrom: Moment) => ({ effectiveDateFrom: edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }),
      EffectiveDateTo: (effectiveDateTo: Moment) => ({ effectiveDateTo: edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') })
    });
  }
}
