/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DnfCodeSetupParams
 */
export interface DnfCodeSetupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: number;
  /**
   * Dnf Code.
   * @nullable
   */
  dnfCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DnfCodeSetupParams.build]] instead.
 */
export function createDnfCodeSetupParams(json: any): DnfCodeSetupParams {
  return DnfCodeSetupParams.build(json);
}

/**
 * DnfCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DnfCodeSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DnfCodeSetupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DnfCodeSetupParams.ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NCMCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DnfCodeSetupParams.dnfCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dnfCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DNFCode', this, 'Edm.String');
}

export namespace DnfCodeSetupParams {
  export function build(json: { [keys: string]: FieldType }): DnfCodeSetupParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      NCMCode: (ncmCode: number) => ({ ncmCode: edmToTs(ncmCode, 'Edm.Int32') }),
      DNFCode: (dnfCode: string) => ({ dnfCode: edmToTs(dnfCode, 'Edm.String') })
    });
  }
}
