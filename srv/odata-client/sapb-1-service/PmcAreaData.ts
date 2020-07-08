/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcAreaData
 */
export interface PmcAreaData {
  /**
   * Area Id.
   * @nullable
   */
  areaId?: number;
  /**
   * Area Name.
   * @nullable
   */
  areaName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcAreaData.build]] instead.
 */
export function createPmcAreaData(json: any): PmcAreaData {
  return PmcAreaData.build(json);
}

/**
 * PmcAreaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcAreaDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcAreaData.areaId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  areaId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AreaID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcAreaData.areaName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  areaName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AreaName', this, 'Edm.String');
}

export namespace PmcAreaData {
  export function build(json: { [keys: string]: FieldType }): PmcAreaData {
    return createComplexType(json, {
      AreaID: (areaId: number) => ({ areaId: edmToTs(areaId, 'Edm.Int32') }),
      AreaName: (areaName: string) => ({ areaName: edmToTs(areaName, 'Edm.String') })
    });
  }
}
