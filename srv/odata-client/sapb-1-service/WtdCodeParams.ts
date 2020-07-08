/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtdCodeParams
 */
export interface WtdCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * W Tax Name.
   * @nullable
   */
  wTaxName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdCodeParams.build]] instead.
 */
export function createWtdCodeParams(json: any): WtdCodeParams {
  return WtdCodeParams.build(json);
}

/**
 * WtdCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxName', this, 'Edm.String');
}

export namespace WtdCodeParams {
  export function build(json: { [keys: string]: FieldType }): WtdCodeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      WTaxCode: (wTaxCode: string) => ({ wTaxCode: edmToTs(wTaxCode, 'Edm.String') }),
      WTaxName: (wTaxName: string) => ({ wTaxName: edmToTs(wTaxName, 'Edm.String') })
    });
  }
}
