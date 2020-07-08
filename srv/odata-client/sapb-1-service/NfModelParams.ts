/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * NfModelParams
 */
export interface NfModelParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: string;
  /**
   * Nfm Name.
   * @nullable
   */
  nfmName?: string;
  /**
   * Nfm Description.
   * @nullable
   */
  nfmDescription?: string;
  /**
   * Nfm Code.
   * @nullable
   */
  nfmCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[NfModelParams.build]] instead.
 */
export function createNfModelParams(json: any): NfModelParams {
  return NfModelParams.build(json);
}

/**
 * NfModelParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NfModelParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[NfModelParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AbsEntry', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMName', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMDescription', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMCode', this, 'Edm.String');
}

export namespace NfModelParams {
  export function build(json: { [keys: string]: FieldType }): NfModelParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: string) => ({ absEntry: edmToTs(absEntry, 'Edm.String') }),
      NFMName: (nfmName: string) => ({ nfmName: edmToTs(nfmName, 'Edm.String') }),
      NFMDescription: (nfmDescription: string) => ({ nfmDescription: edmToTs(nfmDescription, 'Edm.String') }),
      NFMCode: (nfmCode: string) => ({ nfmCode: edmToTs(nfmCode, 'Edm.String') })
    });
  }
}
