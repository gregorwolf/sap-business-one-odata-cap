/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * VmThirdPartyValuesData
 */
export interface VmThirdPartyValuesData {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Third Party System Id.
   * @nullable
   */
  thirdPartySystemId?: number;
  /**
   * Third Party Value.
   * @nullable
   */
  thirdPartyValue?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[VmThirdPartyValuesData.build]] instead.
 */
export function createVmThirdPartyValuesData(json: any): VmThirdPartyValuesData {
  return VmThirdPartyValuesData.build(json);
}

/**
 * VmThirdPartyValuesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class VmThirdPartyValuesDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[VmThirdPartyValuesData.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineId', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.thirdPartySystemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartySystemId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ThirdPartySystemId', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.thirdPartyValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartyValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ThirdPartyValue', this, 'Edm.String');
}

export namespace VmThirdPartyValuesData {
  export function build(json: { [keys: string]: FieldType }): VmThirdPartyValuesData {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      LineId: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      ThirdPartySystemId: (thirdPartySystemId: number) => ({ thirdPartySystemId: edmToTs(thirdPartySystemId, 'Edm.Int32') }),
      ThirdPartyValue: (thirdPartyValue: string) => ({ thirdPartyValue: edmToTs(thirdPartyValue, 'Edm.String') })
    });
  }
}
