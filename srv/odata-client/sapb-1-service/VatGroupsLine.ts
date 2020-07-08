/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * VatGroupsLine
 */
export interface VatGroupsLine {
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
  /**
   * Equalization Tax.
   * @nullable
   */
  equalizationTax?: number;
  /**
   * Datev Code.
   * @nullable
   */
  datevCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[VatGroupsLine.build]] instead.
 */
export function createVatGroupsLine(json: any): VatGroupsLine {
  return VatGroupsLine.build(json);
}

/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class VatGroupsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Effectivefrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[VatGroupsLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTax', this, 'Edm.Double');
  /**
   * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  datevCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DatevCode', this, 'Edm.Int32');
}

export namespace VatGroupsLine {
  export function build(json: { [keys: string]: FieldType }): VatGroupsLine {
    return createComplexType(json, {
      Effectivefrom: (effectivefrom: Moment) => ({ effectivefrom: edmToTs(effectivefrom, 'Edm.DateTimeOffset') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      EqualizationTax: (equalizationTax: number) => ({ equalizationTax: edmToTs(equalizationTax, 'Edm.Double') }),
      DatevCode: (datevCode: number) => ({ datevCode: edmToTs(datevCode, 'Edm.Int32') })
    });
  }
}
