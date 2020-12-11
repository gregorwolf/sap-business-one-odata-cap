/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DashboardPackageImportParams
 */
export interface DashboardPackageImportParams {
  /**
   * Package File Path.
   * @nullable
   */
  packageFilePath?: string;
  /**
   * Import Queries.
   * @nullable
   */
  importQueries?: BoYesNoEnum;
  /**
   * Force Overwrite Query.
   * @nullable
   */
  forceOverwriteQuery?: BoYesNoEnum;
  /**
   * Force Overwrite Package.
   * @nullable
   */
  forceOverwritePackage?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageImportParams.build]] instead.
 */
export function createDashboardPackageImportParams(json: any): DashboardPackageImportParams {
  return DashboardPackageImportParams.build(json);
}

/**
 * DashboardPackageImportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DashboardPackageImportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DashboardPackageImportParams> {
  /**
   * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageFilePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PackageFilePath', this, 'Edm.String');
  /**
   * Representation of the [[DashboardPackageImportParams.importQueries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importQueries: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ImportQueries', this);
  /**
   * Representation of the [[DashboardPackageImportParams.forceOverwriteQuery]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forceOverwriteQuery: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ForceOverwriteQuery', this);
  /**
   * Representation of the [[DashboardPackageImportParams.forceOverwritePackage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forceOverwritePackage: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ForceOverwritePackage', this);

  /**
   * Creates an instance of DashboardPackageImportParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DashboardPackageImportParams);
  }
}

export namespace DashboardPackageImportParams {
  /**
   * Metadata information on all properties of the `DashboardPackageImportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DashboardPackageImportParams>[] = [{
    originalName: 'PackageFilePath',
    name: 'packageFilePath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ImportQueries',
    name: 'importQueries',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ForceOverwriteQuery',
    name: 'forceOverwriteQuery',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ForceOverwritePackage',
    name: 'forceOverwritePackage',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DashboardPackageImportParams {
    return deserializeComplexTypeV4(json, DashboardPackageImportParams);
  }
}
