/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class DnfCodeSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DnfCodeSetupParams> {
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

  /**
   * Creates an instance of DnfCodeSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DnfCodeSetupParams);
  }
}

export namespace DnfCodeSetupParams {
  /**
   * Metadata information on all properties of the `DnfCodeSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DnfCodeSetupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NCMCode',
    name: 'ncmCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DNFCode',
    name: 'dnfCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DnfCodeSetupParams {
    return deserializeComplexTypeV4(json, DnfCodeSetupParams);
  }
}
