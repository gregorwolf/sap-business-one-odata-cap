/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * NcmCodeSetupParams
 */
export interface NcmCodeSetupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[NcmCodeSetupParams.build]] instead.
 */
export function createNcmCodeSetupParams(json: any): NcmCodeSetupParams {
  return NcmCodeSetupParams.build(json);
}

/**
 * NcmCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NcmCodeSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[NcmCodeSetupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[NcmCodeSetupParams.ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NCMCode', this, 'Edm.String');
  /**
   * Representation of the [[NcmCodeSetupParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace NcmCodeSetupParams {
  export function build(json: { [keys: string]: FieldType }): NcmCodeSetupParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      NCMCode: (ncmCode: string) => ({ ncmCode: edmToTs(ncmCode, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
