/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PmcAreaDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcAreaData> {
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

  /**
   * Creates an instance of PmcAreaDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcAreaData);
  }
}

export namespace PmcAreaData {
  /**
   * Metadata information on all properties of the `PmcAreaData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcAreaData>[] = [{
    originalName: 'AreaID',
    name: 'areaId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AreaName',
    name: 'areaName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcAreaData {
    return deserializeComplexTypeV4(json, PmcAreaData);
  }
}
