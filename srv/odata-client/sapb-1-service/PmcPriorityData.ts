/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmcPriorityData
 */
export interface PmcPriorityData {
  /**
   * Priority Id.
   * @nullable
   */
  priorityId?: number;
  /**
   * Priority Name.
   * @nullable
   */
  priorityName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcPriorityData.build]] instead.
 */
export function createPmcPriorityData(json: any): PmcPriorityData {
  return PmcPriorityData.build(json);
}

/**
 * PmcPriorityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcPriorityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcPriorityData> {
  /**
   * Representation of the [[PmcPriorityData.priorityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriorityID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcPriorityData.priorityName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriorityName', this, 'Edm.String');

  /**
   * Creates an instance of PmcPriorityDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcPriorityData);
  }
}

export namespace PmcPriorityData {
  /**
   * Metadata information on all properties of the `PmcPriorityData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcPriorityData>[] = [{
    originalName: 'PriorityID',
    name: 'priorityId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PriorityName',
    name: 'priorityName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcPriorityData {
    return deserializeComplexTypeV4(json, PmcPriorityData);
  }
}
