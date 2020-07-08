/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CertificateSeriesParams
 */
export interface CertificateSeriesParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Section.
   * @nullable
   */
  section?: number;
  /**
   * Location.
   * @nullable
   */
  location?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CertificateSeriesParams.build]] instead.
 */
export function createCertificateSeriesParams(json: any): CertificateSeriesParams {
  return CertificateSeriesParams.build(json);
}

/**
 * CertificateSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CertificateSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CertificateSeriesParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[CertificateSeriesParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[CertificateSeriesParams.section]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  section: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Section', this, 'Edm.Int32');
  /**
   * Representation of the [[CertificateSeriesParams.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Location', this, 'Edm.Int32');
}

export namespace CertificateSeriesParams {
  export function build(json: { [keys: string]: FieldType }): CertificateSeriesParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Section: (section: number) => ({ section: edmToTs(section, 'Edm.Int32') }),
      Location: (location: number) => ({ location: edmToTs(location, 'Edm.Int32') })
    });
  }
}
