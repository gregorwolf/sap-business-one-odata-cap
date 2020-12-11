/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmSubprojectParams
 */
export interface PmSubprojectParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Is Subproject.
   * @nullable
   */
  isSubproject?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectParams.build]] instead.
 */
export function createPmSubprojectParams(json: any): PmSubprojectParams {
  return PmSubprojectParams.build(json);
}

/**
 * PmSubprojectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmSubprojectParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSubprojectParams> {
  /**
   * Representation of the [[PmSubprojectParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectParams.isSubproject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isSubproject: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsSubproject', this);

  /**
   * Creates an instance of PmSubprojectParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmSubprojectParams);
  }
}

export namespace PmSubprojectParams {
  /**
   * Metadata information on all properties of the `PmSubprojectParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmSubprojectParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'IsSubproject',
    name: 'isSubproject',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmSubprojectParams {
    return deserializeComplexTypeV4(json, PmSubprojectParams);
  }
}
