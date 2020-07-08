/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxDefinition
 */
export interface TaxDefinition {
  /**
   * Effectivefrom.
   * @nullable
   */
  effectivefrom?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
export function createTaxDefinition(json: any): TaxDefinition {
  return TaxDefinition.build(json);
}

/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxDefinitionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Effectivefrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxDefinition.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
}

export namespace TaxDefinition {
  export function build(json: { [keys: string]: FieldType }): TaxDefinition {
    return createComplexType(json, {
      Effectivefrom: (effectivefrom: Moment) => ({ effectivefrom: edmToTs(effectivefrom, 'Edm.DateTimeOffset') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') })
    });
  }
}
