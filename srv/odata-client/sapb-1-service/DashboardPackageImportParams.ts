/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DashboardPackageImportParams
 */
export interface DashboardPackageImportParams {
  /**
   * Package File Path.
   * @nullable
   */
  packageFilePath?: string;
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
export class DashboardPackageImportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageFilePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PackageFilePath', this, 'Edm.String');
}

export namespace DashboardPackageImportParams {
  export function build(json: { [keys: string]: FieldType }): DashboardPackageImportParams {
    return createComplexType(json, {
      PackageFilePath: (packageFilePath: string) => ({ packageFilePath: edmToTs(packageFilePath, 'Edm.String') })
    });
  }
}
