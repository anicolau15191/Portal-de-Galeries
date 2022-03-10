package back.backend_private.repositories;

import back.backend_private.entity.Poblacio;
import back.backend_private.entity.Sales;
import org.springframework.data.repository.CrudRepository;

public interface SalesCrud extends CrudRepository<Sales, Integer> {
}
