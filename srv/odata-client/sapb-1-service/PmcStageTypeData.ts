/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PmcStageTypeDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcStageTypeData> {
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

  /**
   * Creates an instance of PmcStageTypeDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcStageTypeData);
  }
}

export namespace PmcStageTypeData {
  /**
   * Metadata information on all properties of the `PmcStageTypeData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcStageTypeData>[] = [{
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageName',
    name: 'stageName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StageDescription',
    name: 'stageDescription',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcStageTypeData {
    return deserializeComplexTypeV4(json, PmcStageTypeData);
  }
}
