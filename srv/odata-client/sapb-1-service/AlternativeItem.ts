/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AlternativeItem
 */
export interface AlternativeItem {
  /**
   * Alternative Item Code.
   * @nullable
   */
  alternativeItemCode?: string;
  /**
   * Match Factor.
   * @nullable
   */
  matchFactor?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AlternativeItem.build]] instead.
 */
export function createAlternativeItem(json: any): AlternativeItem {
  return AlternativeItem.build(json);
}

/**
 * AlternativeItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlternativeItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AlternativeItem.alternativeItemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AlternativeItemCode', this, 'Edm.String');
  /**
   * Representation of the [[AlternativeItem.matchFactor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  matchFactor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MatchFactor', this, 'Edm.Double');
  /**
   * Representation of the [[AlternativeItem.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace AlternativeItem {
  export function build(json: { [keys: string]: FieldType }): AlternativeItem {
    return createComplexType(json, {
      AlternativeItemCode: (alternativeItemCode: string) => ({ alternativeItemCode: edmToTs(alternativeItemCode, 'Edm.String') }),
      MatchFactor: (matchFactor: number) => ({ matchFactor: edmToTs(matchFactor, 'Edm.Double') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
