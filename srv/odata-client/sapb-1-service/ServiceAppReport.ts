/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceAppReport
 */
export interface ServiceAppReport {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * System Report Name.
   * @nullable
   */
  systemReportName?: string;
  /**
   * Customized Report Name.
   * @nullable
   */
  customizedReportName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReport.build]] instead.
 */
export function createServiceAppReport(json: any): ServiceAppReport {
  return ServiceAppReport.build(json);
}

/**
 * ServiceAppReportField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceAppReport.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceAppReport.systemReportName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemReportName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SystemReportName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceAppReport.customizedReportName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customizedReportName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomizedReportName', this, 'Edm.String');
}

export namespace ServiceAppReport {
  export function build(json: { [keys: string]: FieldType }): ServiceAppReport {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      SystemReportName: (systemReportName: string) => ({ systemReportName: edmToTs(systemReportName, 'Edm.String') }),
      CustomizedReportName: (customizedReportName: string) => ({ customizedReportName: edmToTs(customizedReportName, 'Edm.String') })
    });
  }
}
