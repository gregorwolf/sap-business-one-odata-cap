/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DunningLetterParams
 */
export interface DunningLetterParams {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DunningLetterParams.build]] instead.
 */
export function createDunningLetterParams(json: any): DunningLetterParams {
  return DunningLetterParams.build(json);
}

/**
 * DunningLetterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DunningLetterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DunningLetterParams> {
  /**
   * Representation of the [[DunningLetterParams.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of DunningLetterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DunningLetterParams);
  }
}

export namespace DunningLetterParams {
  /**
   * Metadata information on all properties of the `DunningLetterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DunningLetterParams>[] = [{
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DunningLetterParams {
    return deserializeComplexTypeV4(json, DunningLetterParams);
  }
}
