/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcStageTypeData
 */
export interface PmcStageTypeData {
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Stage Name.
   * @nullable
   */
  stageName?: string;
  /**
   * Stage Description.
   * @nullable
   */
  stageDescription?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcStageTypeData.build]] instead.
 */
export function createPmcStageTypeData(json: any): PmcStageTypeData {
  return PmcStageTypeData.build(json);
}

/**
 * PmcStageTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcStageTypeDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcStageTypeData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcStageTypeData.stageName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StageName', this, 'Edm.String');
  /**
   * Representation of the [[PmcStageTypeData.stageDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StageDescription', this, 'Edm.String');
}

export namespace PmcStageTypeData {
  export function build(json: { [keys: string]: FieldType }): PmcStageTypeData {
    return createComplexType(json, {
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      StageName: (stageName: string) => ({ stageName: edmToTs(stageName, 'Edm.String') }),
      StageDescription: (stageDescription: string) => ({ stageDescription: edmToTs(stageDescription, 'Edm.String') })
    });
  }
}
